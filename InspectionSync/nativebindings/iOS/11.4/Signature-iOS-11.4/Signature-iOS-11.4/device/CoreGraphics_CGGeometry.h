#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_CoreGraphics_CGGeometry_symbols(JSContext*);
@interface JSValue (CoreGraphics_CGGeometry)
+(JSValue*) valueWithCGVector: (CGVector) s inContext: (JSContext*) context;
-(CGVector) toCGVector;
@end
#pragma clang diagnostic pop