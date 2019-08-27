#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIControl_symbols(JSContext*);
@protocol UIControlInstanceExports<JSExport>
@property (getter=isTracking,readonly,nonatomic) BOOL tracking;
@property (nonatomic) UIControlContentVerticalAlignment contentVerticalAlignment;
@property (getter=isEnabled,nonatomic) BOOL enabled;
@property (readonly,nonatomic) UIControlContentHorizontalAlignment effectiveContentHorizontalAlignment;
@property (getter=isSelected,nonatomic) BOOL selected;
@property (nonatomic) UIControlContentHorizontalAlignment contentHorizontalAlignment;
@property (getter=isHighlighted,nonatomic) BOOL highlighted;
@property (readonly,nonatomic) UIControlState state;
@property (getter=isTouchInside,readonly,nonatomic) BOOL touchInside;
@property (readonly,nonatomic) UIControlEvents allControlEvents;
@property (readonly,nonatomic) NSSet * allTargets;
JSExportAs(sendActionToForEvent,
-(void) jssendAction: (NSString *) action to: (id) target forEvent: (UIEvent *) event );
JSExportAs(addTargetActionForControlEvents,
-(void) jsaddTarget: (id) target action: (NSString *) action forControlEvents: (UIControlEvents) controlEvents );
-(void) cancelTrackingWithEvent: (UIEvent *) event ;
-(void) endTrackingWithTouch: (UITouch *) touch withEvent: (UIEvent *) event ;
-(NSArray *) actionsForTarget: (id) target forControlEvent: (UIControlEvents) controlEvent ;
-(BOOL) continueTrackingWithTouch: (UITouch *) touch withEvent: (UIEvent *) event ;
-(void) sendActionsForControlEvents: (UIControlEvents) controlEvents ;
JSExportAs(removeTargetActionForControlEvents,
-(void) jsremoveTarget: (id) target action: (NSString *) action forControlEvents: (UIControlEvents) controlEvents );
-(BOOL) beginTrackingWithTouch: (UITouch *) touch withEvent: (UIEvent *) event ;
@end
@protocol UIControlClassExports<JSExport>
@end
#pragma clang diagnostic pop