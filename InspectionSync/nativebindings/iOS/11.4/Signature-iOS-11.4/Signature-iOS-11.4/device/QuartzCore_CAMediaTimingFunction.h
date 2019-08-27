#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_QuartzCore_CAMediaTimingFunction_symbols(JSContext*);
@protocol CAMediaTimingFunctionInstanceExports<JSExport, NSSecureCodingInstanceExports_>
JSExportAs(initWithControlPoints,
-(id) jsinitWithControlPoints: (float) c1x : (float) c1y : (float) c2x : (float) c2y );
@end
@protocol CAMediaTimingFunctionClassExports<JSExport, NSSecureCodingClassExports_>
+(id) functionWithName: (NSString *) name ;
+(id) functionWithControlPoints: (float) c1x : (float) c1y : (float) c2x : (float) c2y ;
@end
#pragma clang diagnostic pop