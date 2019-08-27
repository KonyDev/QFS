#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_CoreVideo_CVBase_symbols(JSContext*);
@interface JSValue (CoreVideo_CVBase)
+(JSValue*) valueWithCVSMPTETime: (CVSMPTETime) s inContext: (JSContext*) context;
-(CVSMPTETime) toCVSMPTETime;
+(JSValue*) valueWithCVTimeStamp: (CVTimeStamp) s inContext: (JSContext*) context;
-(CVTimeStamp) toCVTimeStamp;
+(JSValue*) valueWithCVTime: (CVTime) s inContext: (JSContext*) context;
-(CVTime) toCVTime;
@end
#pragma clang diagnostic pop