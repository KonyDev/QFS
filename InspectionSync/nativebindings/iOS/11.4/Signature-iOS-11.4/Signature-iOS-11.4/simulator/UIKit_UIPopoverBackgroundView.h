#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIPopoverBackgroundView_symbols(JSContext*);
@protocol UIPopoverBackgroundViewInstanceExports<JSExport, UIPopoverBackgroundViewMethodsInstanceExports_>
@property (readwrite,nonatomic) CGFloat arrowOffset;
@property (readwrite,nonatomic) UIPopoverArrowDirection arrowDirection;
@end
@protocol UIPopoverBackgroundViewClassExports<JSExport, UIPopoverBackgroundViewMethodsClassExports_>
+(BOOL) wantsDefaultContentAppearance;
@end
@protocol UIPopoverBackgroundViewMethodsInstanceExports_<JSExport>
@end
@protocol UIPopoverBackgroundViewMethodsClassExports_<JSExport>
+(CGFloat) arrowHeight;
+(CGFloat) arrowBase;
+(UIEdgeInsets) contentViewInsets;
@end
#pragma clang diagnostic pop