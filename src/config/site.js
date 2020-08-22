const currentDate = new Date();
const { PUBLIC_URL } = process.env;
export const site = {
  name: 'Placeholder Company',
  copyrightYear: currentDate.getFullYear(),
  logo: `${PUBLIC_URL}/placeholder/img/logos/logo-white.png`,
};
