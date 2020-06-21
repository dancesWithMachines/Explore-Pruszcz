export class Place {
  id: number;
  title: string;
  location: {
    lat: number,
    lng: number
  }
  options: {
    icon: string;
  }
  description: string;
  photoPaths: string[];
  link: string;
}
