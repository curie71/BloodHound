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

import { ReactNode } from 'react';

type MainNavLogoImage = {
    imageUrl: string;
    dimensions: { height: string; width: string };
    classes?: string;
    altText: string;
};

export type MainNavLogoDataObject = {
    project: {
        route: string;
        icon: ReactNode;
        image: MainNavLogoImage;
    };
    specterOps: {
        image: MainNavLogoImage;
    };
};

export type MainNavDataListItem = {
    label: string | ReactNode;
    icon: ReactNode;
    route?: string;
    functionHandler?: () => void;
    testId: string;
};

export type MainNavData = {
    logo: MainNavLogoDataObject;
    primaryList: MainNavDataListItem[];
    secondaryList: MainNavDataListItem[];
};
