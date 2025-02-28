// Copyright 2023 Specter Ops, Inc.
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

import { Theme } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

const usePaneStyles = makeStyles((theme: Theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        pointerEvents: 'none',
        overflowY: 'hidden',
    },
    headerPaperRoot: {
        backgroundColor: theme.palette.neutral.secondary,
        pointerEvents: 'auto',
    },
    contentPaperRoot: {
        backgroundColor: theme.palette.neutral.secondary,
        marginTop: theme.spacing(1),
        overflowX: 'hidden',
        overflowY: 'auto',
        padding: theme.spacing(1, 2),
        pointerEvents: 'auto',
        '& > div.node:nth-child(odd)': {
            background: theme.palette.neutral.tertiary,
        },
    },
    breadcrumbs: {
        margin: '6px 10px 6px 10px',
    },
    separator: {
        margin: 0,
    },
}));

export default usePaneStyles;
