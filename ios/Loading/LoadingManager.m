//
//  LoadingManager.m
//  pitech_jogtoearn_mobile
//
//  Created by Henry Chu on 28/06/2022.
//


#import "LoadingManager.h"
#import <SVProgressHUD/SVProgressHUD.h>

@implementation LoadingManager : NSObject
RCT_EXPORT_MODULE(RNLoading)
RCT_EXPORT_METHOD(showLoading) {
  [SVProgressHUD setDefaultMaskType: SVProgressHUDMaskTypeBlack];
  [SVProgressHUD show];
}

RCT_EXPORT_METHOD(hideLoading) {
  [SVProgressHUD dismiss];
}

@end
