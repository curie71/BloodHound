// Copyright 2025 Specter Ops, Inc.
//
// Licensed under the Apache License, Version 2.0
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import { BasePath, BaseSVG, BaseSVGProps } from './utils';

export const FileMagnifyingGlass: React.FC<BaseSVGProps> = (props) => {
    return (
        <BaseSVG
            name='file-magnifying-glass'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 18 22'
            fill='none'
            {...props}>
            <BasePath
                d='M5.16974 5.44347H5.1884C5.18443 5.44347 5.18101 5.44439 5.17825 5.44572H5.1884V5.4559V5.46445L5.0634 5.56847V5.44572H5.16974V5.44347ZM5.16974 5.44347V3.23784L3.08742 5.44572M2.16976 15.5892V6.81915H5.1884H5.18864C5.53415 6.81849 5.8638 6.67285 6.10583 6.41666C6.34763 6.16071 6.4826 5.8152 6.48322 5.45612V5.4559V2.25339H11.4415C11.7161 2.25395 11.9809 2.36961 12.1773 2.57756C12.3741 2.78579 12.4859 3.06949 12.4864 3.36685V11.001C12.4864 11.1812 12.554 11.3554 12.6763 11.4848C12.7989 11.6145 12.9666 11.6888 13.1432 11.6888C13.3197 11.6888 13.4875 11.6145 13.61 11.4848C13.7324 11.3554 13.7999 11.1812 13.7999 11.001V3.36664V3.36653C13.7993 2.70886 13.5523 2.07698 13.111 1.6099C12.6696 1.14258 12.0694 0.878341 11.4418 0.877709H11.4416H5.83262C5.79159 0.873885 5.7503 0.874109 5.7093 0.878383L5.70035 0.879316L5.69163 0.881521C5.67107 0.886716 5.6508 0.892959 5.63086 0.900223H5.62442H5.5971L5.57227 0.911624C5.54109 0.925936 5.51108 0.942759 5.4825 0.961917L5.46405 0.974288L5.45099 0.992261L5.44127 1.00563C5.41209 1.02763 5.38473 1.05206 5.35943 1.07867L5.35911 1.07901L1.04778 5.64702L1.04754 5.64727C1.01741 5.67938 0.990402 5.71444 0.966878 5.75191L0.966562 5.75172L0.962068 5.76028L0.952973 5.77761C0.9359 5.80649 0.920927 5.83664 0.908164 5.86778L0.898829 5.89056V5.91518V5.91518V5.91519V5.91519V5.9152V5.9152V5.91521V5.91522V5.91522V5.91523V5.91524V5.91524V5.91525V5.91526V5.91527V5.91528V5.91529V5.9153V5.91531V5.91532V5.91534V5.91535V5.91536V5.91538V5.91539V5.9154V5.91542V5.91543V5.91545V5.91547V5.91548V5.9155V5.91552V5.91554V5.91556V5.91558V5.91559V5.91561V5.91564V5.91566V5.91568V5.9157V5.91572V5.91574V5.91577V5.91579V5.91582V5.91584V5.91586V5.91589V5.91592V5.91594V5.91597V5.916V5.91602V5.91605V5.91608V5.91611V5.91614V5.91617V5.9162V5.91623V5.91626V5.91629V5.91632V5.91636V5.91639V5.91642V5.91645V5.91649V5.91652V5.91656V5.91659V5.91663V5.91666V5.9167V5.91674V5.91677V5.91681V5.91685V5.91689V5.91692V5.91696V5.917V5.91704V5.91708V5.91712V5.91716V5.9172V5.91725V5.91729V5.91733V5.91737V5.91742V5.91746V5.9175V5.91755V5.91759V5.91764V5.91768V5.91773V5.91777V5.91782V5.91787V5.91791V5.91796V5.91801V5.91806V5.91811V5.91815V5.9182V5.91825V5.9183V5.91835V5.9184V5.91845V5.91851V5.91856V5.91861V5.91866V5.91871V5.91877V5.91882V5.91887V5.91893V5.91898V5.91903V5.91909V5.91914V5.9192V5.91926V5.91931V5.91937V5.91942V5.91948V5.91954V5.9196V5.91965V5.91971V5.91977V5.91983V5.91989V5.91995V5.92001V5.92007V5.92013V5.92019V5.92025V5.92031V5.92037V5.92043V5.92049V5.92056V5.92062V5.92068V5.92074V5.92081V5.92087V5.92093V5.921V5.92106V5.92113V5.92119V5.92126V5.92132V5.92139V5.92145V5.92152V5.92159V5.92165V5.92172V5.92179V5.92186V5.92192V5.92199V5.92206V5.92213V5.9222V5.92227V5.92233V5.9224V5.92247V5.92254V5.92261V5.92268V5.92275V5.92282V5.9229V5.92297V5.92304V5.92311V5.92318V5.92325V5.92333V5.9234V5.92347V5.92354V5.92362V5.92369V5.92376V5.92384V5.92391V5.92399V5.92406V5.92414V5.92421V5.92429V5.92436V5.92444V5.92451V5.92459V5.92466V5.92474V5.92482V5.92489V5.92497V5.92505V5.92512V5.9252V5.92528V5.92536V5.92543V5.92551V5.92559V5.92567V5.92575V5.92583V5.9259V5.92598V5.92606V5.92614V5.92622V5.9263V5.92638V5.92646V5.92654V5.92662V5.9267V5.92678V5.92686V5.92694V5.92702V5.92711V5.92719V5.92727V5.92735V5.92743V5.92751V5.9276V5.92768V5.92776V5.9278C0.891698 5.94938 0.88562 5.97131 0.880617 5.99352L0.878844 6.00138L0.878097 6.00941C0.874155 6.05178 0.873976 6.09444 0.87756 6.13683L0.87756 15.587L0.87756 15.5871C0.878151 16.2448 1.12517 16.8767 1.56644 17.3438C2.00793 17.8111 2.60812 18.0753 3.23573 18.076H3.23586H7.63864C7.81519 18.076 7.98296 18.0017 8.1055 17.8719C8.22781 17.7425 8.29538 17.5683 8.29538 17.3881C8.29538 17.2079 8.22781 17.0338 8.1055 16.9043C7.98296 16.7746 7.81519 16.7003 7.63864 16.7003V16.6996L7.62549 16.701L7.61078 16.7025H3.21483C2.94018 16.702 2.67538 16.5863 2.47888 16.3784C2.28219 16.1702 2.17031 15.8865 2.16976 15.5892Z'
                stroke='black'
                strokeWidth='0.25'
            />
            <BasePath
                d='M16.9351 19.9521L16.9348 19.9519L15.2042 18.1308C15.7037 17.3595 15.9214 16.4219 15.8155 15.4928C15.7057 14.5294 15.256 13.644 14.5543 13.0146C13.8524 12.385 12.9504 12.0583 12.0287 12.102C11.1071 12.1457 10.2366 12.5564 9.5911 13.2494C8.94577 13.9423 8.57265 14.8663 8.54466 15.8362C8.51668 16.806 8.83583 17.7522 9.43979 18.4852C10.0439 19.2184 10.8888 19.6844 11.8061 19.7875C12.6861 19.8864 13.568 19.6441 14.2891 19.1093L16.0004 20.9208C16.1231 21.0506 16.291 21.125 16.4678 21.125C16.6445 21.125 16.8124 21.0506 16.9351 20.9208C17.0575 20.7912 17.1252 20.6168 17.1252 20.4365C17.1252 20.2561 17.0575 20.0817 16.9351 19.9521ZM9.89713 15.9538C9.89633 15.4642 10.0328 14.9859 10.2886 14.5795C10.5443 14.1731 10.9075 13.8573 11.3313 13.6709C11.7549 13.4846 12.2209 13.4357 12.6704 13.5299C13.1199 13.6242 13.534 13.8578 13.8597 14.2022C14.1855 14.5468 14.4082 14.9868 14.4984 15.4668C14.5887 15.9468 14.5423 16.4443 14.3654 16.8961C14.1885 17.3478 13.8895 17.7327 13.5071 18.0028C13.1249 18.2728 12.6764 18.4162 12.2184 18.4158C11.6058 18.4147 11.017 18.1568 10.5814 17.6961C10.1455 17.2352 9.89877 16.6088 9.89713 15.9538Z'
                stroke='black'
                strokeWidth='0.25'
            />
        </BaseSVG>
    );
};

export default FileMagnifyingGlass;
