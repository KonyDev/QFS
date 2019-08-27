#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIBarCommon_symbols(JSContext*);
@protocol UIBarPositioningInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,nonatomic) UIBarPosition barPosition;
@end
@protocol UIBarPositioningClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UIBarPositioningDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(UIBarPosition) positionForBar: (id) bar ;
@end
@protocol UIBarPositioningDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop