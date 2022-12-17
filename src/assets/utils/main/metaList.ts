import meta_1 from '../../images/meta_1.png';
import metaHover_1 from '../../images/meta_1_2.png';
import meta_2 from '../../images/meta_2.png';
import metaHover_2 from '../../images/meta_2_2.png';
import meta_3 from '../../images/meta_3.png';
import metaHover_3 from '../../images/meta_3_2.png';

export interface metaBackground {
  backUrl: string;
  hoverUrl: string;
}
const metaList = [
  { backgroundUrl: meta_1, hoverUrl: metaHover_1, content: 'TRUTHFUL' },
  { backgroundUrl: meta_2, hoverUrl: metaHover_2, content: 'SINCERITY' },
  { backgroundUrl: meta_3, hoverUrl: metaHover_3, content: 'HEALTHY' },
];
export { metaList };
