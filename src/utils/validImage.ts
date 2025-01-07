export default async function validImage(url: string | null): Promise<string> {
  const defaultImage = '/assets/icons/profile.svg';

  if (url === null || url.includes('via.placeholder.com')) return defaultImage;

  const response = await fetch(url);
  const contentType = response.headers.get('Content-Type');
  console.log(url);
  console.log(contentType);
  if (response.ok && (contentType?.startsWith('image/') || contentType === 'application/octet-stream')) {
    return url;
  }

  return defaultImage;
}
