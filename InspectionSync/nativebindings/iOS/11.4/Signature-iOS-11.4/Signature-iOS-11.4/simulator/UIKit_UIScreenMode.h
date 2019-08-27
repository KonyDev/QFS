#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIScreenMode_symbols(JSContext*);
@protocol UIScreenModeInstanceExports<JSExport>
@property (readonly,nonatomic) CGFloat pixelAspectRatio;
@property (readonly,nonatomic) CGSize size;
@end
@protocol UIScreenModeClassExports<JSExport>
@end
#pragma clang diagnostic pop