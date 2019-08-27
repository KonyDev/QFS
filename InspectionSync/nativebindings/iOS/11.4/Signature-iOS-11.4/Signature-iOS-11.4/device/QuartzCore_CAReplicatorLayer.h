#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_QuartzCore_CAReplicatorLayer_symbols(JSContext*);
@protocol CAReplicatorLayerInstanceExports<JSExport>
@property () NSInteger instanceCount;
@property () CFTimeInterval instanceDelay;
@property () float instanceGreenOffset;
@property () float instanceBlueOffset;
@property () id instanceColor;
@property () CATransform3D instanceTransform;
@property () BOOL preservesDepth;
@property () float instanceRedOffset;
@property () float instanceAlphaOffset;
@end
@protocol CAReplicatorLayerClassExports<JSExport>
@end
#pragma clang diagnostic pop