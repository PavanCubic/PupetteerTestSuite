export default async function handleUpload(id, path, page){
    const file = await page.$(id);
    await file.uploadFile(path);
}