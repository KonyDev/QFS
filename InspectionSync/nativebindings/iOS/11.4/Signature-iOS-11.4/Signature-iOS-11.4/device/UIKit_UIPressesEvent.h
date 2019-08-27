#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIPressesEvent_symbols(JSContext*);
@protocol UIPressesEventInstanceExports<JSExport>
@property (readonly,nonatomic) NSSet * allPresses;
-(NSSet *) pressesForGestureRecognizer: (UIGestureRecognizer *) gesture ;
@end
@protocol UIPressesEventClassExports<JSExport>
@end
#pragma clang diagnostic pop