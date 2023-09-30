import { fetchPageAssets } from '../../ducks/hostedAssets.duck';
export const TOS_ASSET_NAME = 'terms-of-service';
export const PRIVACY_POLICY_ASSET_NAME = 'privacy-policy';

export const loadData = (params, search) => dispatch => {
   console.log("1111111111111111111111111");
  const pageAsset = {
    termsOfService: `content/pages/${TOS_ASSET_NAME}.json`,
    privacyPolicy: `content/pages/${PRIVACY_POLICY_ASSET_NAME}.json`,
  };

  console.log("1111111111111111111111111");
  return dispatch(fetchPageAssets(pageAsset, true));
};
