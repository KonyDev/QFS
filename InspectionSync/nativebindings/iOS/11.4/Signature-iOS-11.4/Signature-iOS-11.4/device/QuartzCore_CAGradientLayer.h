#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_QuartzCore_CAGradientLayer_symbols(JSContext*);
@protocol CAGradientLayerInstanceExports<JSExport>
@property (copy) NSString * type;
@property (copy) NSArray * colors;
@property () CGPoint endPoint;
@property () CGPoint startPoint;
@property (copy) NSArray * locations;
@end
@protocol CAGradientLayerClassExports<JSExport>
@end
#pragma clang diagnostic pop