#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIImpactFeedbackGenerator_symbols(JSContext*);
@protocol UIImpactFeedbackGeneratorInstanceExports<JSExport>
-(void) impactOccurred;
JSExportAs(initWithStyle,
-(id) jsinitWithStyle: (UIImpactFeedbackStyle) style );
@end
@protocol UIImpactFeedbackGeneratorClassExports<JSExport>
@end
#pragma clang diagnostic pop