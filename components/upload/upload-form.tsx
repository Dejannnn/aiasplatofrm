"use client"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import z from "zod";
import { useToast } from "@/hooks/use-toast"
import { useUploadThing } from "@/utils/uploadthing";
import { transcibedUploadFile } from "@/actions/upload";
const schema = z.object({
    file: z.instanceof(File, { message: "Not valid file" })
        .refine((file) => file.size <= 20 * 1024 * 1024, "File size must not exceed 20MB")
        .refine((file) => file.type.startsWith("audio/") || file.type.startsWith("video/"), "File must be an auddio or a video file")
})

export default function UploadForm() {
    const { toast } = useToast();
    const { startUpload } = useUploadThing("videoOrAudioUploader", {
        onClientUploadComplete: () => {
            toast({ title: "Upload complited", description: "Upload file finshed" })
        },
        onUploadError: (error) => {
            toast({ title: "Upload error", description: "Somthing wrong happen" })
        },
        onUploadBegin: () => {
            toast({ title: "Upload has begun", description: "Upload file in process" })

        },
    });

    const handleTranscribe = async (formData: FormData) => {
        const file = formData.get("file") as File;

        const validateFileds = schema.safeParse({ file });
        if (!validateFileds.success) {
            console.log("validateFileds", validateFileds.error.flatten().fieldErrors)
            toast({ title: "Somthing went wrong", description: validateFileds.error.flatten().fieldErrors.file ?? "Invalid file", variant: "destructive" })
        }
        if (file) {
           const result = await startUpload([file]);
           if(!result){
            toast({ title: "Somthing went wrong", variant: "destructive" })

           }
           console.log(">>>>>result>>", result);
           toast({ title: "Transicrption in progress" })
           const transipleFile = await transcibedUploadFile(result);

           if(!transipleFile || transipleFile.data == null){
            toast({ title: "Unexpected error" })
            return
           }

           if(transipleFile?.data){
            toast({ title: "Start genereting AI blog post" })
           }
        }
    }
    return (
        <form className="flex flex-col gap-6" action={handleTranscribe}>
            <div className="flex justify-end items-center gap-1.5">
                <Input className="" type="file" name="file" id="file" accept="audio/*, video/*" required />
                <Button className="bg-gradient-to-r from-purple-700 to-pink-800 text-lg text-white font-bold">Transcribe</Button>
            </div>
        </form>
    )
}