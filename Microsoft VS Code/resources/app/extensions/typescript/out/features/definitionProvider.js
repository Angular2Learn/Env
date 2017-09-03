"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
const definitionProviderBase_1 = require("./definitionProviderBase");
class TypeScriptDefinitionProvider extends definitionProviderBase_1.default {
    constructor(client) {
        super(client);
    }
    provideDefinition(document, position, token) {
        return this.getSymbolLocations('definition', document, position, token);
    }
}
exports.default = TypeScriptDefinitionProvider;
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/41abd21afdf7424c89319ee7cb0445cc6f376959/extensions\typescript\out/features\definitionProvider.js.map
