<template>
    <router-view></router-view>
</template>

<style lang="scss">
    @import './assets/scss/base/_base.scss';
    @import './assets/scss/base/_fonts.scss';
</style>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTelegramPlane, faGalacticRepublic } from '@fortawesome/free-brands-svg-icons'
import { faBell, faQuestion, faCogs, faAngleRight, faQrcode, faStepBackward, faStepForward, faAngleLeft, faBars, faEllipsisH, faCaretDown, faCaretLeft, faCaretRight, faCheckCircle, faTimesCircle, faTimes, faStar, faEllipsisV, faSearch, faEnvelope, faDollarSign, faHeart, faCog, faHome, faPlus, faHouseUser, faPowerOff, faUsers, faSignOutAlt, faUser, faFile, faAngleDown, faPlusCircle, faPrint } from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faHeart, faQuestion, faTelegramPlane, faQrcode, faPrint, faStepBackward, faStepForward, faBars, faAngleLeft, faTimesCircle, faCaretDown, faCaretLeft, faCaretRight, faAngleRight, faCheckCircle, faTimes, faStar, faSearch, faEllipsisV, faGalacticRepublic, faDollarSign, faCog, faEnvelope, faPlus, faHome, faBell, faPowerOff, faUsers, faEllipsisH, faFile, faHouseUser, faCogs, faSignOutAlt, faAngleDown, faPlusCircle)

export default {
    methods: {
        close() {
            document.querySelector('#sidebar-wrapper').classList.remove('toggled');
            document.querySelector('.backdrop').classList.remove('on');
        }
    }
}

</script>