#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UITouch_symbols(JSContext*);
@protocol UITouchInstanceExports<JSExport>
@property (readonly,nonatomic) CGFloat altitudeAngle;
@property (readonly,copy,nonatomic) NSArray * gestureRecognizers;
@property (readonly,nonatomic) NSNumber * estimationUpdateIndex;
@property (readonly,nonatomic) NSTimeInterval timestamp;
@property (readonly,nonatomic) UITouchProperties estimatedProperties;
@property (readonly,nonatomic) CGFloat maximumPossibleForce;
@property (readonly,nonatomic,strong) UIWindow * window;
@property (readonly,nonatomic) NSUInteger tapCount;
@property (readonly,nonatomic) UITouchPhase phase;
@property (readonly,nonatomic) CGFloat force;
@property (readonly,nonatomic) CGFloat majorRadius;
@property (readonly,nonatomic) UITouchProperties estimatedPropertiesExpectingUpdates;
@property (readonly,nonatomic) UITouchType type;
@property (readonly,nonatomic) CGFloat majorRadiusTolerance;
@property (readonly,nonatomic,strong) UIView * view;
-(CGPoint) previousLocationInView: (UIView *) view ;
-(CGPoint) locationInView: (UIView *) view ;
-(CGPoint) preciseLocationInView: (UIView *) view ;
-(CGFloat) azimuthAngleInView: (UIView *) view ;
-(CGPoint) precisePreviousLocationInView: (UIView *) view ;
-(CGVector) azimuthUnitVectorInView: (UIView *) view ;
@end
@protocol UITouchClassExports<JSExport>
@end
#pragma clang diagnostic pop