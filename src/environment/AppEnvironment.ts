import {DEPLOYMENT_MODE} from "../utils/DeploymentConstants";
import {BACKEND_STAGE_URL} from "./Staging";
import {BACKEND_PRODUCTION_URL} from "./Production";
import {isProductionMode} from "./AppConfig";

let url;

if ((window as any).Configs) {
    if ((window as any).Configs.deploymentEnv === DEPLOYMENT_MODE.STAGE) {
        url = BACKEND_STAGE_URL;
    } else if ((window as any).Configs.deploymentEnv === DEPLOYMENT_MODE.PROD) {
        url = BACKEND_PRODUCTION_URL;
    }
} else {
    url = isProductionMode ? BACKEND_PRODUCTION_URL : BACKEND_STAGE_URL;
}

export const BACKEND_URL = url;