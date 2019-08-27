#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIView_symbols(JSContext*);
@protocol UIViewUIConstraintBasedLayoutInstallingConstraintsCategoryInstanceExports<JSExport>
@property (readonly,nonatomic) NSArray * constraints;
-(void) addConstraints: (NSArray *) constraints ;
-(void) removeConstraints: (NSArray *) constraints ;
-(void) addConstraint: (NSLayoutConstraint *) constraint ;
-(void) removeConstraint: (NSLayoutConstraint *) constraint ;
@end
@protocol UIViewUIConstraintBasedLayoutInstallingConstraintsCategoryClassExports<JSExport>
@end
@protocol UIViewInstanceExports<JSExport, NSCodingInstanceExports_, UIAppearanceInstanceExports_, UIAppearanceContainerInstanceExports_, UIDynamicItemInstanceExports_, UITraitEnvironmentInstanceExports_, UICoordinateSpaceInstanceExports_, UIFocusItemInstanceExports_, CALayerDelegateInstanceExports_>
@property (readonly,nonatomic,strong) CALayer * layer;
@property (readonly,nonatomic) BOOL canBecomeFocused;
@property (readonly,nonatomic) UIUserInterfaceLayoutDirection effectiveUserInterfaceLayoutDirection;
@property (getter=isUserInteractionEnabled,nonatomic) BOOL userInteractionEnabled;
@property (nonatomic) UISemanticContentAttribute semanticContentAttribute;
@property (nonatomic) NSInteger tag;
@property (getter=isFocused,readonly,nonatomic) BOOL focused;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
JSExportAs(initWithFrame,
-(id) jsinitWithFrame: (CGRect) frame );
@end
@protocol UIViewClassExports<JSExport, NSCodingClassExports_, UIAppearanceClassExports_, UIAppearanceContainerClassExports_, UIDynamicItemClassExports_, UITraitEnvironmentClassExports_, UICoordinateSpaceClassExports_, UIFocusItemClassExports_, CALayerDelegateClassExports_>
+(UIUserInterfaceLayoutDirection) userInterfaceLayoutDirectionForSemanticContentAttribute: (UISemanticContentAttribute) attribute ;
+(id) layerClass;
+(UIUserInterfaceLayoutDirection) userInterfaceLayoutDirectionForSemanticContentAttribute: (UISemanticContentAttribute) semanticContentAttribute relativeToLayoutDirection: (UIUserInterfaceLayoutDirection) layoutDirection ;
@end
@protocol UIViewUILayoutGuideSupportCategoryInstanceExports<JSExport>
@property (readonly,copy,nonatomic) NSArray * layoutGuides;
-(void) addLayoutGuide: (UILayoutGuide *) layoutGuide ;
-(void) removeLayoutGuide: (UILayoutGuide *) layoutGuide ;
@end
@protocol UIViewUILayoutGuideSupportCategoryClassExports<JSExport>
@end
@protocol UIViewUIViewKeyframeAnimationsCategoryInstanceExports<JSExport>
@end
@protocol UIViewUIViewKeyframeAnimationsCategoryClassExports<JSExport>
JSExportAs(addKeyframeWithRelativeStartTimeRelativeDurationAnimations,
+(void) jsaddKeyframeWithRelativeStartTime: (double) frameStartTime relativeDuration: (double) frameDuration animations: (JSValue *) animations );
JSExportAs(animateKeyframesWithDurationDelayOptionsAnimationsCompletion,
+(void) jsanimateKeyframesWithDuration: (NSTimeInterval) duration delay: (NSTimeInterval) delay options: (UIViewKeyframeAnimationOptions) options animations: (JSValue *) animations completion: (JSValue *) completion );
@end
@protocol UIViewUIViewAnimationWithBlocksCategoryInstanceExports<JSExport>
@end
@protocol UIViewUIViewAnimationWithBlocksCategoryClassExports<JSExport>
JSExportAs(transitionFromViewToViewDurationOptionsCompletion,
+(void) jstransitionFromView: (UIView *) fromView toView: (UIView *) toView duration: (NSTimeInterval) duration options: (UIViewAnimationOptions) options completion: (JSValue *) completion );
JSExportAs(animateWithDurationDelayOptionsAnimationsCompletion,
+(void) jsanimateWithDuration: (NSTimeInterval) duration delay: (NSTimeInterval) delay options: (UIViewAnimationOptions) options animations: (JSValue *) animations completion: (JSValue *) completion );
JSExportAs(transitionWithViewDurationOptionsAnimationsCompletion,
+(void) jstransitionWithView: (UIView *) view duration: (NSTimeInterval) duration options: (UIViewAnimationOptions) options animations: (JSValue *) animations completion: (JSValue *) completion );
JSExportAs(animateWithDurationAnimations,
+(void) jsanimateWithDuration: (NSTimeInterval) duration animations: (JSValue *) animations );
JSExportAs(performSystemAnimationOnViewsOptionsAnimationsCompletion,
+(void) jsperformSystemAnimation: (UISystemAnimation) animation onViews: (NSArray *) views options: (UIViewAnimationOptions) options animations: (JSValue *) parallelAnimations completion: (JSValue *) completion );
JSExportAs(animateWithDurationAnimationsCompletion,
+(void) jsanimateWithDuration: (NSTimeInterval) duration animations: (JSValue *) animations completion: (JSValue *) completion );
JSExportAs(animateWithDurationDelayUsingSpringWithDampingInitialSpringVelocityOptionsAnimationsCompletion,
+(void) jsanimateWithDuration: (NSTimeInterval) duration delay: (NSTimeInterval) delay usingSpringWithDamping: (CGFloat) dampingRatio initialSpringVelocity: (CGFloat) velocity options: (UIViewAnimationOptions) options animations: (JSValue *) animations completion: (JSValue *) completion );
@end
@protocol UIViewUIConstraintBasedLayoutLayeringCategoryInstanceExports<JSExport>
@property (readonly,strong) UIView * viewForLastBaselineLayout;
@property (readonly,nonatomic) CGSize intrinsicContentSize;
@property (readonly,nonatomic) UIEdgeInsets alignmentRectInsets;
@property (readonly,strong) UIView * viewForFirstBaselineLayout;
-(UILayoutPriority) contentHuggingPriorityForAxis: (UILayoutConstraintAxis) axis ;
-(void) setContentCompressionResistancePriority: (UILayoutPriority) priority forAxis: (UILayoutConstraintAxis) axis ;
-(CGRect) alignmentRectForFrame: (CGRect) frame ;
-(void) setContentHuggingPriority: (UILayoutPriority) priority forAxis: (UILayoutConstraintAxis) axis ;
-(CGRect) frameForAlignmentRect: (CGRect) alignmentRect ;
-(UILayoutPriority) contentCompressionResistancePriorityForAxis: (UILayoutConstraintAxis) axis ;
-(void) invalidateIntrinsicContentSize;
-(UIView *) viewForBaselineLayout;
@end
@protocol UIViewUIConstraintBasedLayoutLayeringCategoryClassExports<JSExport>
@end
@protocol UILayoutGuideUIConstraintBasedLayoutDebuggingCategoryInstanceExports<JSExport>
@property (readonly,nonatomic) BOOL hasAmbiguousLayout;
-(NSArray *) constraintsAffectingLayoutForAxis: (UILayoutConstraintAxis) axis ;
@end
@protocol UILayoutGuideUIConstraintBasedLayoutDebuggingCategoryClassExports<JSExport>
@end
@protocol UIViewUIViewLayoutConstraintCreationCategoryInstanceExports<JSExport>
@property (readonly,nonatomic,strong) NSLayoutXAxisAnchor * trailingAnchor;
@property (readonly,nonatomic,strong) NSLayoutXAxisAnchor * centerXAnchor;
@property (readonly,nonatomic,strong) NSLayoutXAxisAnchor * leadingAnchor;
@property (readonly,nonatomic,strong) NSLayoutYAxisAnchor * centerYAnchor;
@property (readonly,nonatomic,strong) NSLayoutXAxisAnchor * leftAnchor;
@property (readonly,nonatomic,strong) NSLayoutYAxisAnchor * bottomAnchor;
@property (readonly,nonatomic,strong) NSLayoutYAxisAnchor * lastBaselineAnchor;
@property (readonly,nonatomic,strong) NSLayoutDimension * widthAnchor;
@property (readonly,nonatomic,strong) NSLayoutXAxisAnchor * rightAnchor;
@property (readonly,nonatomic,strong) NSLayoutYAxisAnchor * firstBaselineAnchor;
@property (readonly,nonatomic,strong) NSLayoutDimension * heightAnchor;
@property (readonly,nonatomic,strong) NSLayoutYAxisAnchor * topAnchor;
@end
@protocol UIViewUIViewLayoutConstraintCreationCategoryClassExports<JSExport>
@end
@protocol UIViewUIConstraintBasedCompatibilityCategoryInstanceExports<JSExport>
@property (nonatomic) BOOL translatesAutoresizingMaskIntoConstraints;
@end
@protocol UIViewUIConstraintBasedCompatibilityCategoryClassExports<JSExport>
+(BOOL) requiresConstraintBasedLayout;
@end
@protocol UIViewUIConstraintBasedLayoutDebuggingCategoryInstanceExports<JSExport>
@property (readonly,nonatomic) BOOL hasAmbiguousLayout;
-(NSArray *) constraintsAffectingLayoutForAxis: (UILayoutConstraintAxis) axis ;
-(void) exerciseAmbiguityInLayout;
@end
@protocol UIViewUIConstraintBasedLayoutDebuggingCategoryClassExports<JSExport>
@end
@protocol UIViewUIViewGeometryCategoryInstanceExports<JSExport>
@property (nonatomic) CGPoint center;
@property (nonatomic) CGRect frame;
@property (nonatomic) CGFloat contentScaleFactor;
@property (nonatomic) CGAffineTransform transform;
@property (nonatomic) CGRect bounds;
@property (nonatomic) UIViewAutoresizing autoresizingMask;
@property (getter=isMultipleTouchEnabled,nonatomic) BOOL multipleTouchEnabled;
@property (nonatomic) BOOL autoresizesSubviews;
@property (getter=isExclusiveTouch,nonatomic) BOOL exclusiveTouch;
-(CGPoint) convertPoint: (CGPoint) point fromView: (UIView *) view ;
-(CGRect) convertRect: (CGRect) rect fromView: (UIView *) view ;
-(void) sizeToFit;
-(CGSize) sizeThatFits: (CGSize) size ;
-(CGPoint) convertPoint: (CGPoint) point toView: (UIView *) view ;
-(UIView *) hitTest: (CGPoint) point withEvent: (UIEvent *) event ;
-(BOOL) pointInside: (CGPoint) point withEvent: (UIEvent *) event ;
-(CGRect) convertRect: (CGRect) rect toView: (UIView *) view ;
@end
@protocol UIViewUIViewGeometryCategoryClassExports<JSExport>
@end
@protocol UIViewUIViewRenderingCategoryInstanceExports<JSExport>
@property (nonatomic) CGRect contentStretch;
@property (nonatomic) BOOL clipsToBounds;
@property (getter=isOpaque,nonatomic) BOOL opaque;
@property (nonatomic) UIViewContentMode contentMode;
@property (nonatomic,strong) UIColor * tintColor;
@property (nonatomic) UIViewTintAdjustmentMode tintAdjustmentMode;
@property (copy,nonatomic) UIColor * backgroundColor;
@property (nonatomic) CGFloat alpha;
@property (nonatomic) BOOL clearsContextBeforeDrawing;
@property (nonatomic,strong) UIView * maskView;
@property (getter=isHidden,nonatomic) BOOL hidden;
-(void) tintColorDidChange;
-(void) setNeedsDisplayInRect: (CGRect) rect ;
-(void) drawRect: (CGRect) rect ;
-(void) setNeedsDisplay;
@end
@protocol UIViewUIViewRenderingCategoryClassExports<JSExport>
@end
@protocol UIViewUIViewHierarchyCategoryInstanceExports<JSExport>
@property (readonly,copy,nonatomic) NSArray * subviews;
@property (readonly,nonatomic) UIView * superview;
@property (nonatomic) NSDirectionalEdgeInsets directionalLayoutMargins;
@property (readonly,nonatomic,strong) UILayoutGuide * readableContentGuide;
@property (readonly,nonatomic) UIEdgeInsets safeAreaInsets;
@property (readonly,strong) UILayoutGuide * layoutMarginsGuide;
@property (readonly,nonatomic) UIWindow * window;
@property (readonly,nonatomic,strong) UILayoutGuide * safeAreaLayoutGuide;
@property (nonatomic) BOOL preservesSuperviewLayoutMargins;
@property (nonatomic) BOOL insetsLayoutMarginsFromSafeArea;
@property (nonatomic) UIEdgeInsets layoutMargins;
-(void) removeFromSuperview;
-(void) didAddSubview: (UIView *) subview ;
-(void) willMoveToSuperview: (UIView *) newSuperview ;
-(void) willMoveToWindow: (UIWindow *) newWindow ;
-(void) didMoveToWindow;
-(__kindof UIView *) viewWithTag: (NSInteger) tag ;
-(void) willRemoveSubview: (UIView *) subview ;
-(void) insertSubview: (UIView *) view atIndex: (NSInteger) index ;
-(void) addSubview: (UIView *) view ;
-(void) insertSubview: (UIView *) view aboveSubview: (UIView *) siblingSubview ;
-(void) safeAreaInsetsDidChange;
-(void) didMoveToSuperview;
-(void) insertSubview: (UIView *) view belowSubview: (UIView *) siblingSubview ;
-(void) layoutMarginsDidChange;
-(void) bringSubviewToFront: (UIView *) view ;
-(void) exchangeSubviewAtIndex: (NSInteger) index1 withSubviewAtIndex: (NSInteger) index2 ;
-(BOOL) isDescendantOfView: (UIView *) view ;
-(void) setNeedsLayout;
-(void) layoutSubviews;
-(void) sendSubviewToBack: (UIView *) view ;
-(void) layoutIfNeeded;
@end
@protocol UIViewUIViewHierarchyCategoryClassExports<JSExport>
@end
@protocol UIViewUIConstraintBasedLayoutCoreMethodsCategoryInstanceExports<JSExport>
-(void) setNeedsUpdateConstraints;
-(void) updateConstraintsIfNeeded;
-(void) updateConstraints;
-(BOOL) needsUpdateConstraints;
@end
@protocol UIViewUIConstraintBasedLayoutCoreMethodsCategoryClassExports<JSExport>
@end
@protocol UIViewUIStateRestorationCategoryInstanceExports<JSExport>
@property (copy,nonatomic) NSString * restorationIdentifier;
-(void) encodeRestorableStateWithCoder: (NSCoder *) coder ;
-(void) decodeRestorableStateWithCoder: (NSCoder *) coder ;
@end
@protocol UIViewUIStateRestorationCategoryClassExports<JSExport>
@end
@protocol UIViewUIConstraintBasedLayoutFittingSizeCategoryInstanceExports<JSExport>
-(CGSize) systemLayoutSizeFittingSize: (CGSize) targetSize withHorizontalFittingPriority: (UILayoutPriority) horizontalFittingPriority verticalFittingPriority: (UILayoutPriority) verticalFittingPriority ;
-(CGSize) systemLayoutSizeFittingSize: (CGSize) targetSize ;
@end
@protocol UIViewUIConstraintBasedLayoutFittingSizeCategoryClassExports<JSExport>
@end
@protocol UIViewUIViewMotionEffectsCategoryInstanceExports<JSExport>
@property (copy,nonatomic) NSArray * motionEffects;
-(void) addMotionEffect: (UIMotionEffect *) effect ;
-(void) removeMotionEffect: (UIMotionEffect *) effect ;
@end
@protocol UIViewUIViewMotionEffectsCategoryClassExports<JSExport>
@end
@protocol UIViewUIViewGestureRecognizersCategoryInstanceExports<JSExport>
@property (copy,nonatomic) NSArray * gestureRecognizers;
-(BOOL) gestureRecognizerShouldBegin: (UIGestureRecognizer *) gestureRecognizer ;
-(void) addGestureRecognizer: (UIGestureRecognizer *) gestureRecognizer ;
-(void) removeGestureRecognizer: (UIGestureRecognizer *) gestureRecognizer ;
@end
@protocol UIViewUIViewGestureRecognizersCategoryClassExports<JSExport>
@end
@protocol UIViewUISnapshottingCategoryInstanceExports<JSExport>
-(UIView *) snapshotViewAfterScreenUpdates: (BOOL) afterUpdates ;
-(UIView *) resizableSnapshotViewFromRect: (CGRect) rect afterScreenUpdates: (BOOL) afterUpdates withCapInsets: (UIEdgeInsets) capInsets ;
-(BOOL) drawViewHierarchyInRect: (CGRect) rect afterScreenUpdates: (BOOL) afterUpdates ;
@end
@protocol UIViewUISnapshottingCategoryClassExports<JSExport>
@end
@protocol UIViewUIViewAnimationCategoryInstanceExports<JSExport>
@end
@protocol UIViewUIViewAnimationCategoryClassExports<JSExport>
+(void) setAnimationsEnabled: (BOOL) enabled ;
+(void) setAnimationStartDate: (NSDate *) startDate ;
+(void) setAnimationDelegate: (id) delegate ;
+(void) setAnimationCurve: (UIViewAnimationCurve) curve ;
+(NSTimeInterval) inheritedAnimationDuration;
+(void) setAnimationRepeatAutoreverses: (BOOL) repeatAutoreverses ;
JSExportAs(performWithoutAnimation,
+(void) jsperformWithoutAnimation: (JSValue *) actionsWithoutAnimation );
+(BOOL) areAnimationsEnabled;
+(void) setAnimationTransition: (UIViewAnimationTransition) transition forView: (UIView *) view cache: (BOOL) cache ;
+(void) commitAnimations;
JSExportAs(setAnimationWillStartSelector,
+(void) jssetAnimationWillStartSelector: (NSString *) selector );
+(void) setAnimationDelay: (NSTimeInterval) delay ;
+(void) setAnimationRepeatCount: (float) repeatCount ;
JSExportAs(setAnimationDidStopSelector,
+(void) jssetAnimationDidStopSelector: (NSString *) selector );
+(void) setAnimationDuration: (NSTimeInterval) duration ;
+(void) setAnimationBeginsFromCurrentState: (BOOL) fromCurrentState ;
@end
@protocol UICoordinateSpaceInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,nonatomic) CGRect bounds;
-(CGRect) convertRect: (CGRect) rect fromCoordinateSpace: (id) coordinateSpace ;
-(CGRect) convertRect: (CGRect) rect toCoordinateSpace: (id) coordinateSpace ;
-(CGPoint) convertPoint: (CGPoint) point fromCoordinateSpace: (id) coordinateSpace ;
-(CGPoint) convertPoint: (CGPoint) point toCoordinateSpace: (id) coordinateSpace ;
@end
@protocol UICoordinateSpaceClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop