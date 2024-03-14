export async function waitForSeconds(timeInSeconds){
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve(true)
        },timeInSeconds * 1000);
    })
}