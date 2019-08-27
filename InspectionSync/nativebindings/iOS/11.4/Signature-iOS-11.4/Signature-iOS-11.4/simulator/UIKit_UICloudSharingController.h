#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UICloudSharingController_symbols(JSContext*);
@protocol UICloudSharingControllerInstanceExports<JSExport>
@property (nonatomic) UICloudSharingPermissionOptions availablePermissions;
@property (readonly,nonatomic,strong) CKShare * share;
@property (nonatomic,weak) id delegate;
JSExportAs(initWithShareContainer,
-(id) jsinitWithShare: (CKShare *) share container: (CKContainer *) container );
JSExportAs(initWithPreparationHandler,
-(id) jsinitWithPreparationHandler: (JSValue *) preparationHandler );
-(id) activityItemSource;
@end
@protocol UICloudSharingControllerClassExports<JSExport>
@end
@protocol UICloudSharingControllerDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(NSString *) itemTypeForCloudSharingController: (UICloudSharingController *) csc ;
-(void) cloudSharingControllerDidSaveShare: (UICloudSharingController *) csc ;
-(void) cloudSharingControllerDidStopSharing: (UICloudSharingController *) csc ;
-(NSString *) itemTitleForCloudSharingController: (UICloudSharingController *) csc ;
-(void) cloudSharingController: (UICloudSharingController *) csc failedToSaveShareWithError: (NSError *) error ;
-(NSData *) itemThumbnailDataForCloudSharingController: (UICloudSharingController *) csc ;
@end
@protocol UICloudSharingControllerDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop