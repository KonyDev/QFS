#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_QuartzCore_CAMediaTiming_symbols(JSContext*);
@protocol CAMediaTimingInstanceExports_<JSExport>
@property () CFTimeInterval repeatDuration;
@property () float repeatCount;
@property () BOOL autoreverses;
@property () CFTimeInterval timeOffset;
@property (copy) NSString * fillMode;
@property () CFTimeInterval beginTime;
@property () CFTimeInterval duration;
@property () float speed;
@end
@protocol CAMediaTimingClassExports_<JSExport>
@end
#pragma clang diagnostic pop