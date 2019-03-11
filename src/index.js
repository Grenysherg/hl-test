/* Styles */

import './index.scss';

/* Libs */



/* Default */



/* Blocks */

import rebuildRem from './default/rebuild-rem';

/* Init */

rebuildRem();

$(window).on('resize', rebuildRem);