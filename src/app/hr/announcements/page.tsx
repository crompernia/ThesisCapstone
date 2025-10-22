/**
 * @fileoverview This file defines the Announcements page for the HR portal.
 * It provides HR personnel with tools to create, view, and manage company-wide announcements.
 */
'use client';
import * as React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Trash2 } from "lucide-react";
// dropdown menu removed (not used) to satisfy TS unused import checks
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getPastAnnouncements } from "@/lib/data";
import { createAnnouncementAction, deleteAnnouncementAction } from './actions';
import { useToast } from '@/hooks/use-toast';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

/**
 * Renders the HR announcements management page.
 * Allows creating, viewing, and managing company-wide announcements.
 * @returns {JSX.Element} The announcements page component.
 */


export default function AnnouncementsPage() {
    React.useEffect(() => {
    document.title = "HR Announcements";
    }, []);
    const { toast } = useToast();
    type Announcement = {
        id: number;
        title: string;
        content: string;
        postedBy: string;
        date: string;
        status: string;
        created_at: Date | null;
        first_name?: string | null;
        last_name?: string | null;
    }
    const [pastAnnouncements, setPastAnnouncements] = React.useState<Announcement[]>([]);
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const [isSubmitting, setIsSubmitting] = React.useState(false);

    const fetchAnnouncements = React.useCallback(async () => {
        const data = await getPastAnnouncements();
        setPastAnnouncements(data);
    }, []);

    React.useEffect(() => {
        fetchAnnouncements();
    }, [fetchAnnouncements]);

    const handleSubmit = async (status: string) => {
        setIsSubmitting(true);
        const result = await createAnnouncementAction(title, content, status);
        if (result?.success) {
            toast({
                title: 'Success',
                description: `Announcement has been ${status === 'Published' ? 'posted' : 'saved as draft'}.`,
            });
            setTitle('');
            setContent('');
            fetchAnnouncements();
        } else {
            toast({
                variant: 'destructive',
                title: 'Error',
                description: result?.message || 'Failed to create announcement.',
            });
        }
        setIsSubmitting(false);
    };

    const handleDelete = async (id: number) => {
        const result = await deleteAnnouncementAction(id);
        if (result?.success) {
            toast({
                title: 'Success',
                description: 'Announcement has been deleted.',
            });
            fetchAnnouncements();
        } else {
             toast({
                variant: 'destructive',
                title: 'Error',
                description: result?.message || 'Failed to delete announcement.',
            });
        }
    };


  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold font-headline">Company Announcements</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* New Announcement Form */}
        <div className="lg:col-span-1">
            <Card>
                <CardHeader>
                    <CardTitle>New Announcement</CardTitle>
                    <CardDescription>Create a new announcement for all employees.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="announcement-title">Title</Label>
                        <Input id="announcement-title" placeholder="Enter the title" value={title} onChange={(e) => setTitle(e.target.value)} disabled={isSubmitting} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="announcement-content">Content</Label>
                        <Textarea id="announcement-content" placeholder="Type your announcement here..." className="min-h-[200px]" value={content} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)} disabled={isSubmitting}/>
                    </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline" onClick={() => handleSubmit('Draft')} disabled={isSubmitting || !title || !content}>Save Draft</Button>
                    <Button onClick={() => handleSubmit('Published')} disabled={isSubmitting || !title || !content}>Post Announcement</Button>
                </CardFooter>
            </Card>
        </div>

        {/* Past Announcements Table */}
        <div className="lg:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>Past Announcements</CardTitle>
                    <CardDescription>Manage and view previous announcements.</CardDescription>
                </CardHeader>
                <CardContent>
                    {pastAnnouncements.length > 0 ? (
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Posted By</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {pastAnnouncements.map(a => (
                                    <TableRow key={a.id}>
                                        <TableCell className="font-medium">{a.title}</TableCell>
                                        <TableCell>{a.postedBy}</TableCell>
                                        <TableCell>{a.date}</TableCell>
                                        <TableCell><Badge variant={a.status === 'Published' ? 'default' : 'secondary'} className={a.status === 'Published' ? 'bg-blue-500' : ''}>{a.status}</Badge></TableCell>
                                        <TableCell className="text-right">
                                            <AlertDialog>
                                                <AlertDialogTrigger asChild>
                                                    <Button variant="ghost" size="icon" className="text-destructive">
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                                        <AlertDialogDescription>
                                                            This action cannot be undone. This will permanently delete the announcement.
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                        <AlertDialogAction onClick={() => handleDelete(a.id)}>Delete</AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    ) : (
                        <p className="text-muted-foreground text-center">No past announcements found.</p>
                    )}
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
