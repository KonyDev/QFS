#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UISpringLoadedInteraction_symbols(JSContext*);
@protocol UISpringLoadedInteractionInstanceExports<JSExport, UIInteractionInstanceExports_>
@property (readonly,nonatomic,strong) id interactionEffect;
@property (readonly,nonatomic,strong) id interactionBehavior;
JSExportAs(initWithActivationHandler,
-(id) jsinitWithActivationHandler: (JSValue *) handler );
JSExportAs(initWithInteractionBehaviorInteractionEffectActivationHandler,
-(id) jsinitWithInteractionBehavior: (id) interactionBehavior interactionEffect: (id) interactionEffect activationHandler: (JSValue *) handler );
@end
@protocol UISpringLoadedInteractionClassExports<JSExport, UIInteractionClassExports_>
@end
@protocol UISpringLoadedInteractionEffectInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) interaction: (UISpringLoadedInteraction *) interaction didChangeWithContext: (id) context ;
@end
@protocol UISpringLoadedInteractionEffectClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UISpringLoadedInteractionBehaviorInstanceExports_<JSExport, NSObjectInstanceExports_>
-(BOOL) shouldAllowInteraction: (UISpringLoadedInteraction *) interaction withContext: (id) context ;
-(void) interactionDidFinish: (UISpringLoadedInteraction *) interaction ;
@end
@protocol UISpringLoadedInteractionBehaviorClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UISpringLoadedInteractionContextInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,nonatomic) UISpringLoadedInteractionEffectState state;
@property (nonatomic,strong) id targetItem;
@property (nonatomic,strong) UIView * targetView;
-(CGPoint) locationInView: (UIView *) view ;
@end
@protocol UISpringLoadedInteractionContextClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop