#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIAccelerometer_symbols(JSContext*);
@protocol UIAccelerationInstanceExports<JSExport>
@property (readonly,nonatomic) UIAccelerationValue y;
@property (readonly,nonatomic) NSTimeInterval timestamp;
@property (readonly,nonatomic) UIAccelerationValue z;
@property (readonly,nonatomic) UIAccelerationValue x;
@end
@protocol UIAccelerationClassExports<JSExport>
@end
@protocol UIAccelerometerInstanceExports<JSExport>
@property (nonatomic) NSTimeInterval updateInterval;
@property (nonatomic,weak) id delegate;
@end
@protocol UIAccelerometerClassExports<JSExport>
+(UIAccelerometer *) sharedAccelerometer;
@end
@protocol UIAccelerometerDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) accelerometer: (UIAccelerometer *) accelerometer didAccelerate: (UIAcceleration *) acceleration ;
@end
@protocol UIAccelerometerDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop