#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIFocusDebugger_symbols(JSContext*);
@protocol UIFocusDebuggerInstanceExports<JSExport>
@end
@protocol UIFocusDebuggerClassExports<JSExport>
+(id) status;
+(id) simulateFocusUpdateRequestFromEnvironment: (id) environment ;
+(id) help;
+(id) checkFocusabilityForItem: (id) item ;
@end
@protocol UIFocusDebuggerOutputInstanceExports_<JSExport, NSObjectInstanceExports_>
@end
@protocol UIFocusDebuggerOutputClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop