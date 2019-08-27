#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIImagePickerController_symbols(JSContext*);
@protocol UIImagePickerControllerInstanceExports<JSExport, NSCodingInstanceExports_>
@property (nonatomic) UIImagePickerControllerCameraCaptureMode cameraCaptureMode;
@property (nonatomic) UIImagePickerControllerCameraDevice cameraDevice;
@property (nonatomic) UIImagePickerControllerQualityType videoQuality;
@property (nonatomic) UIImagePickerControllerImageURLExportPreset imageExportPreset;
@property (nonatomic) BOOL allowsEditing;
@property (nonatomic) CGAffineTransform cameraViewTransform;
@property (nonatomic) UIImagePickerControllerCameraFlashMode cameraFlashMode;
@property (nonatomic) BOOL allowsImageEditing;
@property (copy,nonatomic) NSArray * mediaTypes;
@property (nonatomic) BOOL showsCameraControls;
@property (nonatomic,strong) __kindof UIView * cameraOverlayView;
@property (nonatomic) NSTimeInterval videoMaximumDuration;
@property (nonatomic) UIImagePickerControllerSourceType sourceType;
@property (copy,nonatomic) NSString * videoExportPreset;
@property (nonatomic,weak) id delegate;
-(BOOL) startVideoCapture;
-(void) stopVideoCapture;
-(void) takePicture;
@end
@protocol UIImagePickerControllerClassExports<JSExport, NSCodingClassExports_>
+(BOOL) isCameraDeviceAvailable: (UIImagePickerControllerCameraDevice) cameraDevice ;
+(BOOL) isFlashAvailableForCameraDevice: (UIImagePickerControllerCameraDevice) cameraDevice ;
+(BOOL) isSourceTypeAvailable: (UIImagePickerControllerSourceType) sourceType ;
+(NSArray *) availableCaptureModesForCameraDevice: (UIImagePickerControllerCameraDevice) cameraDevice ;
+(NSArray *) availableMediaTypesForSourceType: (UIImagePickerControllerSourceType) sourceType ;
@end
@protocol UIImagePickerControllerDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) imagePickerController: (UIImagePickerController *) picker didFinishPickingImage: (UIImage *) image editingInfo: (NSDictionary *) editingInfo ;
-(void) imagePickerController: (UIImagePickerController *) picker didFinishPickingMediaWithInfo: (NSDictionary *) info ;
-(void) imagePickerControllerDidCancel: (UIImagePickerController *) picker ;
@end
@protocol UIImagePickerControllerDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop