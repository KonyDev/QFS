#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_QuartzCore_CATransform3D_symbols(JSContext*);
@interface JSValue (QuartzCore_CATransform3D)
+(JSValue*) valueWithCATransform3D: (CATransform3D) s inContext: (JSContext*) context;
-(CATransform3D) toCATransform3D;
@end
@protocol NSValueCATransform3DAdditionsCategoryInstanceExports<JSExport>
@property (readonly) CATransform3D CATransform3DValue;
@end
@protocol NSValueCATransform3DAdditionsCategoryClassExports<JSExport>
+(NSValue *) valueWithCATransform3D: (CATransform3D) t ;
@end
#pragma clang diagnostic pop