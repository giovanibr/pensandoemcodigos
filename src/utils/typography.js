import Typography from "typography"
//import Wordpress2016 from "typography-theme-wordpress-2016"
import doelger from "typography-theme-doelger"

doelger.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete doelger.googleFonts

const typography = new Typography(doelger)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
