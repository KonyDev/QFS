#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_QuartzCore_CALayer_symbols(JSContext*);
@protocol CALayerInstanceExports<JSExport, NSSecureCodingInstanceExports_, CAMediaTimingInstanceExports_>
@property (copy) NSString * contentsFormat;
@property (readonly) CALayer * superlayer;
@property (strong) CALayer * mask;
@property () CGRect frame;
@property (copy) NSDictionary * actions;
@property () BOOL allowsEdgeAntialiasing;
@property (copy) NSArray * filters;
@property (getter=isDoubleSided) BOOL doubleSided;
@property () CGFloat shadowRadius;
@property (strong) id compositingFilter;
@property (strong) id contents;
@property () id borderColor;
@property (copy) NSDictionary * style;
@property () CGFloat rasterizationScale;
@property (copy) NSArray * backgroundFilters;
@property () float shadowOpacity;
@property (copy) NSString * magnificationFilter;
@property (getter=isOpaque) BOOL opaque;
@property () CATransform3D transform;
@property (copy) NSString * minificationFilter;
@property () id shadowColor;
@property () CGRect contentsCenter;
@property () CGFloat contentsScale;
@property () BOOL masksToBounds;
@property () CGFloat zPosition;
@property () id shadowPath;
@property () CGFloat borderWidth;
@property () float opacity;
@property () BOOL needsDisplayOnBoundsChange;
@property () CAEdgeAntialiasingMask edgeAntialiasingMask;
@property () id backgroundColor;
@property () BOOL allowsGroupOpacity;
@property () CACornerMask maskedCorners;
@property () CGFloat cornerRadius;
@property (weak) id delegate;
@property () CGSize shadowOffset;
@property () CGFloat anchorPointZ;
@property (getter=isHidden) BOOL hidden;
@property () CGPoint anchorPoint;
@property (copy) NSString * name;
@property (getter=isGeometryFlipped) BOOL geometryFlipped;
@property () BOOL drawsAsynchronously;
@property () CGRect contentsRect;
@property () CGRect bounds;
@property () float minificationFilterBias;
@property (copy) NSArray * sublayers;
@property (copy) NSString * contentsGravity;
@property () CGPoint position;
@property () CATransform3D sublayerTransform;
@property () BOOL shouldRasterize;
-(CALayer *) hitTest: (CGPoint) p ;
-(void) displayIfNeeded;
-(void) insertSublayer: (CALayer *) layer below: (CALayer *) sibling ;
-(void) setAffineTransform: (CGAffineTransform) m ;
-(id) jsinit;
-(CGPoint) convertPoint: (CGPoint) p fromLayer: (CALayer *) l ;
-(CGPoint) convertPoint: (CGPoint) p toLayer: (CALayer *) l ;
-(void) layoutSublayers;
-(void) removeAnimationForKey: (NSString *) key ;
-(CGAffineTransform) affineTransform;
-(id) actionForKey: (NSString *) event ;
-(CFTimeInterval) convertTime: (CFTimeInterval) t toLayer: (CALayer *) l ;
-(BOOL) shouldArchiveValueForKey: (NSString *) key ;
-(CAAnimation *) animationForKey: (NSString *) key ;
-(NSArray *) animationKeys;
-(CGRect) convertRect: (CGRect) r fromLayer: (CALayer *) l ;
-(void) display;
-(void) removeAllAnimations;
-(BOOL) needsDisplay;
-(BOOL) needsLayout;
-(void) drawInContext: (id) ctx ;
JSExportAs(initWithLayer,
-(id) jsinitWithLayer: (id) layer );
-(void) addAnimation: (CAAnimation *) anim forKey: (NSString *) key ;
-(void) setNeedsLayout;
-(void) removeFromSuperlayer;
-(void) replaceSublayer: (CALayer *) layer with: (CALayer *) layer2 ;
-(id) presentationLayer;
-(void) setNeedsDisplayInRect: (CGRect) r ;
-(CFTimeInterval) convertTime: (CFTimeInterval) t fromLayer: (CALayer *) l ;
-(void) setNeedsDisplay;
-(void) insertSublayer: (CALayer *) layer atIndex: (unsigned int) idx ;
-(void) layoutIfNeeded;
-(id) modelLayer;
-(BOOL) containsPoint: (CGPoint) p ;
-(BOOL) contentsAreFlipped;
-(void) insertSublayer: (CALayer *) layer above: (CALayer *) sibling ;
-(void) addSublayer: (CALayer *) layer ;
-(CGRect) convertRect: (CGRect) r toLayer: (CALayer *) l ;
-(void) renderInContext: (id) ctx ;
-(CGSize) preferredFrameSize;
@end
@protocol CALayerClassExports<JSExport, NSSecureCodingClassExports_, CAMediaTimingClassExports_>
+(id) defaultValueForKey: (NSString *) key ;
+(id) layer;
+(BOOL) needsDisplayForKey: (NSString *) key ;
+(id) defaultActionForKey: (NSString *) event ;
@end
@protocol NSNullCAActionAdditionsCategoryInstanceExports<JSExport, CAActionInstanceExports_>
@end
@protocol NSNullCAActionAdditionsCategoryClassExports<JSExport, CAActionClassExports_>
@end
@protocol CALayerDelegateInstanceExports_<JSExport, NSObjectInstanceExports_>
-(void) drawLayer: (CALayer *) layer inContext: (id) ctx ;
-(id) actionForLayer: (CALayer *) layer forKey: (NSString *) event ;
-(void) displayLayer: (CALayer *) layer ;
-(void) layoutSublayersOfLayer: (CALayer *) layer ;
-(void) layerWillDraw: (CALayer *) layer ;
@end
@protocol CALayerDelegateClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol CAActionInstanceExports_<JSExport>
-(void) runActionForKey: (NSString *) event object: (id) anObject arguments: (NSDictionary *) dict ;
@end
@protocol CAActionClassExports_<JSExport>
@end
#pragma clang diagnostic pop