#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_QuartzCore_CAValueFunction_symbols(JSContext*);
@protocol CAValueFunctionInstanceExports<JSExport, NSSecureCodingInstanceExports_>
@property (readonly) NSString * name;
@end
@protocol CAValueFunctionClassExports<JSExport, NSSecureCodingClassExports_>
+(id) functionWithName: (NSString *) name ;
@end
#pragma clang diagnostic pop