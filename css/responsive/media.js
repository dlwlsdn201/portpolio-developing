export const breakPoints = {
    IPHONE5 : '320px',
    MOBILE : '480px',
    TABLET : '768px',
    NOTEBOOK: '1060px',
    LARGE_DESKTOP: '1920px'
};



export const OVER_IPHONE5 = `@media (min-width: calc(${breakPoints.IPHONE5} + 1px))`
export const OVER_MOBILE = `@media (min-width: calc(${breakPoints.MOBILE} + 1px))`
export const OVER_TABLET = `@media (min-width: calc(${breakPoints.TABLET} + 1px))`
export const OVER_NOTEBOOK = `@media (min-width: calc(${breakPoints.NOTEBOOK} + 1px))`
export const UNDER_LARGE_DESKTOP = `@media (max-width: calc(${breakPoints.LARGE_DESKTOP}))`
export const UNDER_NOTEBOOK = `@media (max-width: calc(${breakPoints.NOTEBOOK}))`
export const UNDER_TABLET = `@media (max-width: calc(${breakPoints.TABLET}))`
export const UNDER_IPHONE5 = `@media (max-width: calc(${breakPoints.IPHONE5}))`


const media = {
    OVER_IPHONE5,
    OVER_MOBILE,
    OVER_TABLET,
    OVER_NOTEBOOK,
    UNDER_LARGE_DESKTOP,
    UNDER_NOTEBOOK,
    UNDER_TABLET,
    UNDER_IPHONE5,
}

export default media;

