import {Design} from './app/model/design';
import {Album} from './app/model/album';

export const DESIGNS: Design[] = [
  {
    DesignID: 5286,
    Caption: 'Flower',
    Description: '120 x 114 stitches 15 colors',
    ImageUrl: 'https://www.cross-stitch-pattern.net/Flower-5286-s-Free-Design.jpg',
    FacebookUrl: 'Flower-5285-s-Free-Design-Facebook.jpg',
    DownloadParams: 'DesignID=5286',
    DesignUrl: 'Flower-17-681-Free-Design.aspx',
    IsAuthenticated: false,
    IsAdministrator: false,
    Title: 'Flower|5286',
    TopTipText1: '',
    TopTipText2: '',
    TopTipText3: '',
    TopTipText4: '',
    TopTipText5: '',
    TopTipText6: ''
  },
  {
    DesignID: 5061,
    Caption: 'Dog',
    Description: '87 x 72 stitches 4 colors',
    ImageUrl: 'https://www.cross-stitch-pattern.net/Dog-5061-s-Free-Design.jpg',
    FacebookUrl: 'Dog-5060-s-Free-Design-Facebook.jpg',
    DownloadParams: 'DesignID=5061',
    DesignUrl: 'Dog-18-156-Free-Design.aspx',
    IsAuthenticated: false,
    IsAdministrator: false,
    Title: 'Dog|5061',
    TopTipText1: '',
    TopTipText2: '',
    TopTipText3: '',
    TopTipText4: '',
    TopTipText5: '',
    TopTipText6: ''
  },
  {
    DesignID: 2947,
    Caption: 'Knitting',
    Description: '129 x 143 stitches 21 colors',
    ImageUrl: 'https://www.cross-stitch-pattern.net/Knitting-2947-s-Free-Design.jpg',
    FacebookUrl: 'Knitting-2946-s-Free-Design-Facebook.jpg',
    DownloadParams: 'DesignID=2947',
    DesignUrl: 'Knitting-14-237-Free-Design.aspx',
    IsAuthenticated: false,
    IsAdministrator: false,
    Title: 'Knitting|2947',
    TopTipText1: '',
    TopTipText2: '',
    TopTipText3: '',
    TopTipText4: '',
    TopTipText5: '',
    TopTipText6: ''
  }
  ];


export const ALBUMS: Album[]  = [
  { AlbumID: 1,
    Caption: 'Africa'},
  {AlbumID: 2,
    Caption: 'Aliens'},
  {AlbumID: 3,
    Caption: 'Alphabets'},
  {AlbumID: 4,
    Caption: 'Angels'},
  {AlbumID: 5,
    Caption: 'Animals'},
  {AlbumID: 6,
    Caption: 'Australia'},
  {AlbumID: 7,
    Caption: 'Ballet'},
  {AlbumID: 8,
    Caption: 'Bathroom'},
];

export function findDesignById(designId: number): Design {
  return DESIGNS.find(design => design.DesignID === designId);
}


