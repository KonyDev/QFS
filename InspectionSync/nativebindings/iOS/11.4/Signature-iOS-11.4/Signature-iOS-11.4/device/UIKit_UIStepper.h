#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIStepper_symbols(JSContext*);
@protocol UIStepperInstanceExports<JSExport>
@property (nonatomic) double stepValue;
@property (nonatomic) BOOL wraps;
@property (nonatomic) double maximumValue;
@property (nonatomic) BOOL autorepeat;
@property (getter=isContinuous,nonatomic) BOOL continuous;
@property (nonatomic) double value;
@property (nonatomic,strong) UIColor * tintColor;
@property (nonatomic) double minimumValue;
-(UIImage *) backgroundImageForState: (UIControlState) state ;
-(void) setDividerImage: (UIImage *) image forLeftSegmentState: (UIControlState) leftState rightSegmentState: (UIControlState) rightState ;
-(UIImage *) dividerImageForLeftSegmentState: (UIControlState) state rightSegmentState: (UIControlState) state ;
-(void) setBackgroundImage: (UIImage *) image forState: (UIControlState) state ;
-(void) setIncrementImage: (UIImage *) image forState: (UIControlState) state ;
-(UIImage *) decrementImageForState: (UIControlState) state ;
-(UIImage *) incrementImageForState: (UIControlState) state ;
-(void) setDecrementImage: (UIImage *) image forState: (UIControlState) state ;
@end
@protocol UIStepperClassExports<JSExport>
@end
#pragma clang diagnostic pop