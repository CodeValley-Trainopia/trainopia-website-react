export interface IGallery {
  width: string;
  height: string;
  src: string;
  thumbnail: string;
}

interface Datum {
  name: string;
  id_tab: string;
  id_no_tab: string;
  data_bs_toggle: string;
  className: string;
  Gallery: IGallery[];
}

export interface Idata {
  name: string;
  id: string;
  data_bs_target: string;
  aria_controls: string;
  data: Datum[];
}
