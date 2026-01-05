import { Router } from 'express';
import multer from 'multer';
import { supabase } from '../lib/storage';
import { db } from '../lib/db';
import { files } from '../db/schema/files';

const upload = multer({ storage: multer.memoryStorage() });
const router = Router();

router.post('/', upload.single('file'), async (req, res) => {
    try {
        const file = req.file;
        if (!file) return res.status(400).json({ error: 'No file uploaded' });

        // TODO: Get user ID from auth context. For now using a placeholder or failing if strict.
        // const userId = req.user?.id; 

        const filename = `${Date.now()}-${file.originalname}`;

        // Upload to Supabase
        const { data, error } = await supabase.storage
            .from('uploads')
            .upload(filename, file.buffer, {
                contentType: file.mimetype,
            });

        if (error) throw error;

        // Get Public URL
        const { data: publicUrlData } = supabase.storage
            .from('uploads')
            .getPublicUrl(filename);

        // Save metadata to DB
        // await db.insert(files).values({
        //     userId: 'placeholder-uuid', // Needs auth integration
        //     filename: file.originalname,
        //     storagePath: data.path,
        //     publicUrl: publicUrlData.publicUrl,
        //     size: file.size,
        //     mimeType: file.mimetype
        // });

        res.json({
            success: true,
            file: {
                filename: file.originalname,
                url: publicUrlData.publicUrl
            }
        });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ error: (error as Error).message });
    }
});

export default router;
