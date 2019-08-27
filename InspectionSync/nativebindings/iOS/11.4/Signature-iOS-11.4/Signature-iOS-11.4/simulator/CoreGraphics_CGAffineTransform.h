#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_CoreGraphics_CGAffineTransform_symbols(JSContext*);
@interface JSValue (CoreGraphics_CGAffineTransform)
+(JSValue*) valueWithCGAffineTransform: (CGAffineTransform) s inContext: (JSContext*) context;
-(CGAffineTransform) toCGAffineTransform;
@end
#pragma clang diagnostic pop