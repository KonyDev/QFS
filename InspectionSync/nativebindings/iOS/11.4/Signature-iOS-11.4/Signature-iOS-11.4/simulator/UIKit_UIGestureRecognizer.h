#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIGestureRecognizer_symbols(JSContext*);
@protocol UIGestureRecognizerInstanceExports<JSExport>
@property (nonatomic) BOOL delaysTouchesEnded;
@property (nonatomic) BOOL cancelsTouchesInView;
@property (copy,nonatomic) NSString * name;
@property (getter=isEnabled,nonatomic) BOOL enabled;
@property (copy,nonatomic) NSArray * allowedPressTypes;
@property (readonly,nonatomic) UIGestureRecognizerState state;
@property (nonatomic,weak) id delegate;
@property (readonly,nonatomic) NSUInteger numberOfTouches;
@property (nonatomic) BOOL requiresExclusiveTouchType;
@property (copy,nonatomic) NSArray * allowedTouchTypes;
@property (nonatomic) BOOL delaysTouchesBegan;
@property (readonly,nonatomic) UIView * view;
JSExportAs(removeTargetAction,
-(void) jsremoveTarget: (id) target action: (NSString *) action );
-(CGPoint) locationOfTouch: (NSUInteger) touchIndex inView: (UIView *) view ;
-(void) requireGestureRecognizerToFail: (UIGestureRecognizer *) otherGestureRecognizer ;
JSExportAs(initWithTargetAction,
-(id) jsinitWithTarget: (id) target action: (NSString *) action );
JSExportAs(addTargetAction,
-(void) jsaddTarget: (id) target action: (NSString *) action );
-(CGPoint) locationInView: (UIView *) view ;
@end
@protocol UIGestureRecognizerClassExports<JSExport>
@end
@protocol UIGestureRecognizerDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(BOOL) gestureRecognizer: (UIGestureRecognizer *) gestureRecognizer shouldReceivePress: (UIPress *) press ;
-(BOOL) gestureRecognizer: (UIGestureRecognizer *) gestureRecognizer shouldBeRequiredToFailByGestureRecognizer: (UIGestureRecognizer *) otherGestureRecognizer ;
-(BOOL) gestureRecognizer: (UIGestureRecognizer *) gestureRecognizer shouldRecognizeSimultaneouslyWithGestureRecognizer: (UIGestureRecognizer *) otherGestureRecognizer ;
-(BOOL) gestureRecognizer: (UIGestureRecognizer *) gestureRecognizer shouldReceiveTouch: (UITouch *) touch ;
-(BOOL) gestureRecognizerShouldBegin: (UIGestureRecognizer *) gestureRecognizer ;
-(BOOL) gestureRecognizer: (UIGestureRecognizer *) gestureRecognizer shouldRequireFailureOfGestureRecognizer: (UIGestureRecognizer *) otherGestureRecognizer ;
@end
@protocol UIGestureRecognizerDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop