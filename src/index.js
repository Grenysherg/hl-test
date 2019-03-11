/* Styles */

import './index.scss';

/* Libs */



/* Default */

import rebuildRem from './default/rebuild-rem';

/* Blocks */

import mainMenu from './main-menu/main-menu';

/* Init */

rebuildRem();
mainMenu();

$(window).on('resize', rebuildRem);