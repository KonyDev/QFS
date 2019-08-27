#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIVideoEditorController_symbols(JSContext*);
@protocol UIVideoEditorControllerInstanceExports<JSExport>
@property (nonatomic) NSTimeInterval videoMaximumDuration;
@property (nonatomic) UIImagePickerControllerQualityType videoQuality;
@property (assign,nonatomic) id delegate;
@property (copy,nonatomic) NSString * videoPath;
@end
@protocol UIVideoEditorControllerClassExports<JSExport>
+(BOOL) canEditVideoAtPath: (NSString *) videoPath ;
@end
@protocol UIVideoEditorControllerDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) videoEditorController: (UIVideoEditorController *) editor didFailWithError: (NSError *) error ;
-(void) videoEditorControllerDidCancel: (UIVideoEditorController *) editor ;
-(void) videoEditorController: (UIVideoEditorController *) editor didSaveEditedVideoToPath: (NSString *) editedVideoPath ;
@end
@protocol UIVideoEditorControllerDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop