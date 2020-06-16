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
  photoPath: string;
  link: string;
}
