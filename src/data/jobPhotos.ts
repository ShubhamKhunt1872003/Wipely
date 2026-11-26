// Real photos taken by Wipely cleaners on recent jobs (source: src/images/after-before/,
// cropped to 3:4 and compressed into src/images/jobs/). These are genuine "after" shots,
// not stock images and not before/after pairs, so they must only be captioned as finished
// results. Don't swap in stock photos here, and don't present them as transformations.
import kitchen from '../images/jobs/kitchen.jpg';
import kitchenOvens from '../images/jobs/kitchen-ovens.jpg';
import livingRoom from '../images/jobs/living-room.jpg';
import bedroom from '../images/jobs/bedroom.jpg';
import shower from '../images/jobs/shower.jpg';
import bathroomVanity from '../images/jobs/bathroom-vanity.jpg';
import ensuiteVanity from '../images/jobs/ensuite-vanity.jpg';
import wardrobe from '../images/jobs/wardrobe.jpg';

export interface JobPhoto {
  src: string;
  alt: string;
  caption: string;
}

export const JOB_PHOTOS = {
  kitchen: { src: kitchen, alt: 'Kitchen with clean stone benchtop, cooktop and ovens after a Wipely clean', caption: 'Kitchen' },
  kitchenOvens: { src: kitchenOvens, alt: 'Built-in wall ovens and cabinetry wiped down after a Wipely clean', caption: 'Ovens & cabinetry' },
  livingRoom: { src: livingRoom, alt: 'Empty living room with clean timber floors and glass doors after a Wipely clean', caption: 'Living room' },
  bedroom: { src: bedroom, alt: 'Freshly vacuumed bedroom carpet and plantation shutters after a Wipely clean', caption: 'Bedroom & carpet' },
  shower: { src: shower, alt: 'Streak-free glass shower screen and tiles after a Wipely clean', caption: 'Shower & glass' },
  bathroomVanity: { src: bathroomVanity, alt: 'Double bathroom vanity and mirror cleaned by Wipely', caption: 'Bathroom vanity' },
  ensuiteVanity: { src: ensuiteVanity, alt: 'Ensuite basin, vanity and mirror cleaned by Wipely', caption: 'Ensuite' },
  wardrobe: { src: wardrobe, alt: 'Built-in wardrobe shelves and drawers wiped out by Wipely', caption: 'Built-in wardrobe' },
} satisfies Record<string, JobPhoto>;
